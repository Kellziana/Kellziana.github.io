'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/firebase/config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import addData from "@/firebase/firestore/addData"; // Adjust the path to your addData file

export default function AdminPage() {
    const [tags, setTags] = useState([]);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(true);

    const router = useRouter();
    const auth = getAuth(firebase_app);
    const storage = getStorage(firebase_app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push('/login'); // Redirect to login if not authenticated
            } else {
                setLoading(false); // Set loading to false once authenticated
            }
        });

        return () => unsubscribe(); // Cleanup the subscription on unmount
    }, [auth, router]);

    const handleTagClick = (tag) => {
        setTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (file && tags.length > 0) {
            try {
                const user = auth.currentUser;
                const fileRef = ref(storage, `uploads/${user.uid}/${file.name}`);
                await uploadBytes(fileRef, file);

                const fileUrl = await getDownloadURL(fileRef);

                // Use addData to save the file metadata and URL in the user's uploads collection
                const { error } = await addData(`users/${user.uid}/uploads`, file.name, {
                    url: fileUrl,
                    tags: tags,
                    uploadedAt: new Date(),
                });

                if (error) {
                    console.error('Error adding document:', error);
                    alert('Failed to upload file.');
                } else {
                    console.log('File uploaded successfully:', file.name);
                    router.push('/saved'); // Redirect to /saved after successful upload
                }
            } catch (error) {
                console.error('Upload failed:', error);
                alert('Failed to upload file.');
            }

            // Reset the form
            setTags([]);
            setFile(null);
        } else {
            alert('Please fill out all fields and select a file.');
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Add a loading state while checking authentication
    }

    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-dark to-lighterDark p-7 md:p-10">
            <div className="bg-zinc-700 p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-4xl text-white font-bold mb-6">File Upload</h1>
                <div className="mb-6">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mb-4 text-white file:cursor-pointer file:bg-white file:text-white file:rounded file:px-4 file:py-2"
                    />
                    {file && (
                        <div className="w-full h-56 border-solid border-2 flex items-center justify-center">
                            <img src={URL.createObjectURL(file)} alt={file.name} className="object-cover" />
                        </div>
                    )}
                </div>
               
                <div className="mb-6">
                    <label className="block text-gray-700">Tags</label>
                    <div className="flex gap-2 mt-2">
                        {['3D Model', 'Animation', 'Digital Drawing'].map((tag) => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`px-4 py-2 rounded ${
                                    tags.includes(tag)
                                        ? 'bg-[#FFCA6B] text-white'
                                        : 'bg-white text-gray-700'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between">
                    <button onClick={handleSubmit} className="bg-[#FFCA6B] text-white px-4 py-2 rounded">
                        Publish
                    </button>
                </div>
            </div>
        </main>
    );
}
