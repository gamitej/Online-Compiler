import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ================ TO RUN THE INPUT.TXT WITH PYTHON FILE ====================
content = "import sys\nsys.stdin=open('input.txt','r')\n\ntry:\n"
error = "\nexcept Exception as e:\n\tprint([e,'error while compling'])"


def fileReadWrite(code, input):
    try:
        fileName = ['a.py', 'input.txt']
        fileInput = [content+code+error, input]
        for i in range(2):
            f = open(fileName[i], 'w')
            f.write(fileInput[i])
            f.close()
        os.system("python3 a.py > output.txt")
        f = open("output.txt", "r")
        res = f.read()
        if len(res) == 2 and res[1] == 'error while compling':
            return res[0], False
        return res, True
    except Exception as e:
        print(e)
        return e, False


@app.route('/compile', methods=["POST"])
def compile():
    try:
        req = request.get_json()
        code, input = req['code'].replace("\n", "\n\t"), req['input']
        if code:

            res, type = fileReadWrite(code, input)
            if type:
                return jsonify({"output": res, "status": 'Success'}), 200
            return jsonify({"output": res, "status": 'Error'}), 200

        return jsonify({"data": "Something Went Wrong"}), 400

    except Exception as e:
        print(e)
        return jsonify({"msg": "Something went wrong"}), 500


if __name__ == '__main__':
    app.run(debug=True, port=5000)
