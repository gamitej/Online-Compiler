import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/compile', methods=["POST"])
def compile():
        req = request.get_json()
        code, input = req['code'], req['input']

        # Compile and execute the code using subprocess
        try:
            result = subprocess.run(['python3', '-c', code], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        except Exception as e:
            return jsonify(output=str(e))

        # Return the output as a JSON response
        output = result.stdout + result.stderr
        return jsonify(output=output)

if __name__ == '__main__':
    app.run(debug=True, port=5000)


'''
this is to run file from python :-
result = subprocess.run(['python', filename], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
'''