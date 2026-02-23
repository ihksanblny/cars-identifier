import tensorflow as tf
import numpy as np
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.preprocessing import image
import io
from PIL import Image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. LOAD KEDUA MODEL
print("Sedang memuat model-model AI...")
try:
    model_identify = tf.keras.models.load_model("../model/car_identity_model_v2.keras")
    model_damage = tf.keras.models.load_model("../model/car_damage_model.keras")
    print("✅ Semua model berhasil dimuat!")
except Exception as e:
    print(f"❌ Gagal memuat model: {e}")

class_cars = ['Audi', 'Hyundai Creta', 'Mahindra Scorpio', 'Rolls Royce', 'Swift', 'Tata Safari', 'Toyota Innova']
class_damage = ['Minor', 'Moderate', 'Severe']

@app.get("/")
def home():
    return {"message": "Car AI API is Running!"}

# Endpoint khusus Identifikasi Mobil
@app.post("/predict_identity")
async def predict_identity(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(io.BytesIO(contents)).convert('RGB').resize((224, 224))
    img_array = np.expand_dims(image.img_to_array(img), axis=0)
    
    pred = model_identify.predict(img_array)
    idx = np.argmax(pred[0])
    return {
        "name": class_cars[idx],
        "confidence": round(float(np.max(pred[0])) * 100, 2)
    }

# Endpoint khusus Deteksi Kerusakan
@app.post("/predict_damage")
async def predict_damage(file: UploadFile = File(...)):
    contents = await file.read()
    img = Image.open(io.BytesIO(contents)).convert('RGB').resize((224, 224))
    img_array = np.expand_dims(image.img_to_array(img), axis=0)
    
    pred = model_damage.predict(img_array)
    idx = np.argmax(pred[0])
    return {
        "status": class_damage[idx],
        "confidence": round(float(np.max(pred[0])) * 100, 2)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)