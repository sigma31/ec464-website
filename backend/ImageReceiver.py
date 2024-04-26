from flask import Flask, request, jsonify

app = Flask(__name__)

# Define the endpoint to handle image uploads
@app.route('/upload', methods=['POST'])
def upload_file():
    # Check if the POST request contains a file
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    
    # Ensure the file is an image (you can add more validation if needed)
    if file.filename == '':
        return jsonify({'error': 'No file'}), 400
    if not file.filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        return jsonify({'error': 'Invalid file format, must be PNG or JPEG'}), 400

    # Process the image using your machine learning model (replace this with your code)
    prediction = run_machine_learning_model(file)

    return jsonify({'prediction': prediction}), 200

def run_machine_learning_model(image_file):
    return 0 

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
