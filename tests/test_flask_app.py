import unittest
import sys
import os
from app.recommender import app

sys.path.insert(1, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

class FlaskAppTests(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.client = app.test_client()


    def test_response_to_unexpected_data_structure(self):
        response = self.client.post('/recommendations', data='Not a JSON', content_type='application/json')
        self.assertEqual(response.status_code, 400)
    
    def test_post_with_invalid_rating_value(self):
        response = self.client.post(self.endpoint, json={
            'responses': ['Attraction1'],
            'ratings': {'Country1': 'invalid-rating'}
        })
        self.assertEqual(response.status_code, 400)
    
    def test_post_with_empty_responses(self):
        response = self.client.post(self.endpoint, json={'responses': []})
        self.assertEqual(response.status_code, 400)
    
    def test_post_with_no_responses_field(self):
        response = self.client.post(self.endpoint, json={'ratings': {'Country1': 'thumbs-up'}})
        self.assertEqual(response.status_code, 400)

    
if __name__ == '__main__':
    unittest.main()
