import os
import json
import requests

apiAddress = "http://127.0.0.1:8081/"
TELEGRAM_TOKEN = os.getenv("TELEGRAM_TOKEN", "")
CHAT_ID = os.environ.get("CHAT_ID", "")
urlPrefix = apiAddress + "bot" + TELEGRAM_TOKEN

def get_caption() -> str:
    with open("caption.txt", "r", encoding="utf-8") as f:
        return f.read()

def genFileDirectory(path):
    files = {}
    media = []
    for root, dirs, file_name_dic in os.walk(path):
        for fileName in sorted(file_name_dic):
            files[fileName] = open(path + "/" + fileName, "rb")
            media.append(dict(type='document', media=f'attach://{fileName}'))
    media[-1]['caption'] = get_caption()
    media[-1]['parse_mode'] = "Markdown"
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
