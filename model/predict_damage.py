import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image

# 1. Load Model Kerusakan
model = tf.keras.models.load_model("car_damage_model.keras")

# 2. Daftar Kategori (Severity)
class_names = ['01-Minor', '02-Moderate', '03-Severe']

def predict_damage(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)

    # Prediksi
    predictions = model.predict(img_array)
    score = predictions[0]
    
    result_idx = np.argmax(score)
    confidence = 100 * np.max(score)
    
    print(f"\nTingkat Kerusakan: {class_names[result_idx]}")
    print(f"Keyakinan AI: {confidence:.2f}%")
    
    # Logika Estimasi Sederhana
    if result_idx == 0:
        print("Saran: Perbaikan ringan di salon mobil atau poles cat.")
    elif result_idx == 1:
        print("Saran: Perlu Body Repair untuk perbaikan penyok/ganti part kecil.")
    else:
        print("Saran: Kerusakan berat! Segera hubungi asuransi atau bengkel spesialis Body Repair.")

test_image = input("Masukkan path foto mobil rusak: ")
predict_damage(test_image)