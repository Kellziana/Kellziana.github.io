'use client'
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import quizgenie from "@/public/resultsGenie.svg";
import carpet from "@/public/carpet.svg";
import thumbsUpImage from "@/public/thumb-up.png";
import thumbsDownImage from "@/public/thumb-down.png";


function ResultsPage() {
    const [suggestedCountries, setSuggestedCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);
    const [feedbackSubmittedIndex, setFeedbackSubmittedIndex] = useState(null);
    const [savedMessageIndex, setSavedMessageIndex] = useState(null);
    useEffect(() => {
        const storedSuggestedCountries = localStorage.getItem('suggestedCountries');
        if (storedSuggestedCountries) {
            const cleanedSuggestedCountries = storedSuggestedCountries.replace(/\\n/g, "").replace(/Accommodation link:\s*/g, "");
            console.log(cleanedSuggestedCountries);
            const suggestions = cleanedSuggestedCountries.split(/\d+\./).filter(item => item.trim().length > 1);
            setSuggestedCountries(suggestions);
            setLoading(false);
            setTimeout(() => {
                setFadeIn(true);
            }, 2000);
        }
    }, []);

    function makeLinksClickable(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, '<a href="$1" target="_blank" style="color: #60a5fa; text-decoration: underline;">Learn More</a>');
    }

    function extractCountryDescription(country) {
        let description = country.split('-').slice(1).join('-').trim();
        description = makeLinksClickable(description);
        return description;
    }

    function extractCountryName(country) {
        const countryName = country.split('-')[0].trim();
        return countryName;
    }

    const saveHoliday = async (country, index) => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            console.error('User is not signed in');
            return;
        }

        const userId = user.uid;

        const collectionPath = `users/${userId}/savedHolidays`;

        const holidayData = {
            country: extractCountryName(country),
            description: extractCountryDescription(country)
        };

        try {
            const docRef = await addDoc(collection(getFirestore(), collectionPath), holidayData);

            console.log('Holiday saved successfully with ID: ', docRef.id);
            setSavedMessageIndex(index);
        } catch (error) {
            console.error('Error saving holiday:', error);
        }
    };


    const sanitizeCountryName = (country) => {
        const countryName = country.split('-')[0].trim();
        return countryName.replace(/[^\w\s]/gi, '').trim().replace(/\s+/g, '-');
    };

    const thumbsUpFeedback = async (country, index) => {
        const sanitizedCountry = sanitizeCountryName(country);
        const firestore = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            console.error('User is not signed in');
            return;
        }
        const userId = user.uid;
        const ratingsRef = doc(firestore, `users/${userId}/ratings`, sanitizedCountry);
        try {
            await setDoc(ratingsRef, { rating: 'thumbs-up' });
            console.log('Thumbs up feedback submitted successfully');
            setFeedbackSubmittedIndex(index);
        } catch (error) {
            console.error('Error submitting thumbs up feedback:', error);
        }
    };

    const thumbsDownFeedback = async (country, index) => {
        const sanitizedCountry = sanitizeCountryName(country);
        const firestore = getFirestore();
        const auth = getAuth();
        const user = auth.currentUser;
        if (!user) {
            console.error('User is not signed in');
            return;
        }
        const userId = user.uid;
        const ratingsRef = doc(firestore, `users/${userId}/ratings`, sanitizedCountry);
        try {
            await setDoc(ratingsRef, { rating: 'thumbs-down' });
            console.log('Thumbs down feedback submitted successfully');
            setFeedbackSubmittedIndex(index);
        } catch (error) {
            console.error('Error submitting thumbs down feedback:', error);
        }
    };

    return (
        <div className="bg-gradient-to-b from-dark to-lighterDark min-h-screen text-white flex flex-col items-center justify-start pt-2">
            <div className="mb-4 mt-0">
                <Link href={"/"}><Image src={quizgenie} alt="Quiz Genie" width={1200} height={1200} priority /></Link>
            </div>
            <div className="mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4 text-center whitespace-nowrap overflow-hidden border-r-4 border-r-white">You have been granted 3 wishes to choose from....</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="flex justify-center">
                        {suggestedCountries.map((country, index) => (
                            <div key={index} className={`w-1/3 relative opacity-${fadeIn ? '100' : '0'} transition-opacity duration-1000`} style={{ opacity: fadeIn ? 1 : 0, transform: `translateY(${fadeIn ? '0' : '50px'})`, transition: 'transform 1s ease, opacity 1s ease' }}>
                                <div className="relative">
                                    <Image src={carpet} alt="Carpet" width={1200} height={1500} />
                                    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white w-3/4 text-center px-8 py-6 animate-typing">
                                        <p className="text-2xl font-bold mb-4">{`Suggestion ${index + 1}: ${extractCountryName(country)}`}</p>
                                        {savedMessageIndex === index && (
                                            <div className="text-green-400 font-bold">
                                                Your getaway has been successfully saved! View your saved getaways <Link href={"/saved"} style={{ textDecoration: 'underline', cursor: 'pointer' }}>here</Link> !
                                            </div>
                                        )}
                                        <div className="mb-4">
                                            <button onClick={() => saveHoliday(country, index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                Save
                                            </button>
                                        </div>
                                        <div className="flex justify-center">
                                            <button onClick={() => thumbsUpFeedback(country, index)} className="mr-2">
                                                <Image src={thumbsUpImage} alt="Thumbs Up" width={32} height={32} />
                                            </button>
                                            <button onClick={() => thumbsDownFeedback(country, index)}>
                                                <Image src={thumbsDownImage} alt="Thumbs Down" width={32} height={32} />
                                            </button>
                                        </div>
                                        {feedbackSubmittedIndex === index && (
                                            <p className="text-green-400 font-bold">Thank you for your feedback!</p>
                                        )}
                                        <p className="text-md font text-left" dangerouslySetInnerHTML={{ __html: extractCountryDescription(country) }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResultsPage;
