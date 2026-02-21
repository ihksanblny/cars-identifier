import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image

# 1. Load Model yang sudah jadi
model = tf.keras.models.load_model("car_identity_model_v2.keras")

# 2. Daftar kelas (Harus urut sesuai folder)
class_names = ['Audi', 'Hyundai Creta', 'Mahindra Scorpio', 'Rolls Royce', 'Swift', 'Tata Safari', 'Toyota Innova']

def predict_car(img_path):
    # Load gambar dan sesuaikan ukurannya ke 224x224
    img = image.load_img(img_path, target_size=(224, 224))
    
    # Ubah gambar jadi array angka
    img_array = image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Tambahkan dimensi batch

    # Prediksi!
    predictions = model.predict(img_array)
    # score = tf.nn.softmax(predictions[0]) # Ubah hasil jadi persen
    score = predictions[0]
    
    # Ambil index dengan nilai tertinggi
    result_idx = np.argmax(score)
    confidence = 100 * np.max(score)
    
    print(f"\nHasil Prediksi: {class_names[result_idx]}")
    print(f"Tingkat Keyakinan: {confidence:.2f}%")

# 3. Coba tes! Masukkan jalur file gambar mobil di sini
# Contoh: predict_car("../Cars Dataset/test/Swift/10.jpg")
test_image = input("Masukkan path foto mobil untuk dites: ")
predict_car(test_image)