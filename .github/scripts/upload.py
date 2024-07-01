import os
import json
import requests

apiAddress = "http://127.0.0.1:8081/"
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN", "")
CHAT_ID = os.environ.get("CHAT_ID", "")
COMMIT_MESSAGE = os.environ.get("COMMIT_MESSAGE", "")
urlPrefix = apiAddress + "bot" + TELEGRAM_TOKEN

def genFileDirectory(path):
    files_walk = os.walk(path)
    files = {}
    media = []
    for root, dirs, file_name_dic in files_walk:
        for fileName in file_name_dic:
            files[fileName] = open(path + "/" + fileName, "rb")
            media.append(dict(type='document', media=f'attach://{fileName}'))
    if COMMIT_MESSAGE:
        media[-1]['caption'] = COMMIT_MESSAGE
    return media, files

def sendAPKs(path):
    media, files = genFileDirectory(path)
    parma = {
        "chat_id": CHAT_ID,
        "media": json.dumps(media)
    }
    response = requests.post(urlPrefix + "/sendMediaGroup", params=parma, files=files)
    print(response.json())

if __name__ == "__main__":
    apk_path = "./apk"
    sendAPKs(apk_path)
