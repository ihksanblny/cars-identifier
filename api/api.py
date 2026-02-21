import tensorflow as tf
import numpy as np
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from tensorflow.keras.preprocessing import image
import io
from PIL import Image

app = FastAPI()

# Izinkan React akses API ini (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Izinkan semua alamat web (nanti bisa diganti jadi alamat React)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Model
MODEL_PATH = "../model/car_identity_model_v2.keras"
try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print("✅ Model AI Berhasil dimuat!")
except Exception as e:
    print(f"❌ Gagal memuat model: {e}")

class_name = ['Audi', 'Hyundai Creta', 'Mahindra Scorpio', 'Rolls Royce', 'Swift', 'Tata Safari', 'Toyota Innova']

@app.get('/')
def home():
    return {"message": "API Mobil Klasifikasi Berjalan"}

@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    try:
        # Baca file upload
        contents = await file.read()
        img = Image.open(io.BytesIO(contents)).convert('RGB')

        # Resize sesuai kebutuhan Model
        img = img.resize((224, 224))

        # Ubah ke array numpy dan tambahkan dimensi batch
        img_array = image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)

        # Prediksi
        predictions = model.predict(img_array)
        score = predictions[0]

        result_idx = np.argmax(score)
        confidence = float(np.max(score)) * 100

        return {
            "car_type": class_name[result_idx],
            "confidence": round(confidence, 2),
            "status": "success"
        }
    except Exception as e:
        return {"error": str(e)}
    
if __name__ == "__main__":
    import uvicorn
    print("🚀 Memulai server di http://localhost:8000")
    uvicorn.run(app, host="127.0.0.1", port=8000)