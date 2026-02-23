# 🚗 AI Car Identifier (Full-Stack Image Classification)

Aplikasi identifikasi mobil berbasis AI yang dikembangkan menggunakan **Deep Learning** untuk mengenali berbagai merek dan model mobil secara instan. Project ini mencakup pelatihan model, pengembangan backend API, hingga pembuatan antarmuka web yang modern.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🌟 Fitur Utama

- **Identifikasi Instan**: Mengunggah foto mobil dan mendapatkan hasil prediksi dalam hitungan detik.
- **Tingkat Akurasi Tinggi**: Model dilatih menggunakan *Transfer Learning (MobileNetV2)* dengan akurasi mencapai **~87%**.
- **Metadata Lengkap**: Menampilkan informasi spesifikasi mobil seperti tipe mesin, tenaga (HP), kategori, dan estimasi harga pasar.
- **Antarmuka Modern**: UI berbasis *Glassmorphism* yang responsif, dikembangkan dengan React, TypeScript, dan Tailwind CSS.

## 🛠️ Tech Stack

### AI & Machine Learning
- **TensorFlow & Keras**: Framework utama pelatihan model.
- **MobileNetV2**: Arsitektur pre-trained model untuk ekstraksi fitur yang efisien.
- **ImageDataGenerator**: Untuk teknik *Data Augmentation* guna meningkatkan akurasi.

### Backend (API)
- **FastAPI**: Server Python yang cepat dan ringan untuk melayani prediksi model.
- **Uvicorn**: ASGI server untuk menjalankan FastAPI.
- **Pillow**: Pemrosesan gambar di sisi server.

### Frontend (U.I)
- **React 19 (TypeScript)**: Library UI utama.
- **Vite**: Build tool super cepat untuk pengembangan frontend.
- **Tailwind CSS**: Styling utility-first untuk desain premium.
- **Lucide React**: Set icon vektor yang cantik dan konsisten.

---

## 📊 Dataset & Klasifikasi
Model saat ini mendukung identifikasi untuk 7 kategori mobil berikut:
1. **Audi**
2. **Hyundai Creta**
3. **Mahindra Scorpio**
4. **Rolls Royce**
5. **Swift**
6. **Tata Safari**
7. **Toyota Innova**

---

## 🚀 Cara Menjalankan Project

### 1. Prasyarat
- Python 3.9+
- Node.js 18+
- Git

### 2. Setup Backend (API)
```bash
# Masuk ke folder api
cd api

# Buat virtual environment (opsional)
python -m venv venv
source venv/bin/activate  # Untuk Windows: .\venv\Scripts\activate

# Install library
pip install tensorflow fastapi uvicorn python-multipart pillow

# Jalankan server
python api.py
```
### 3. Setup Frontend
```bash
# Masuk ke folder web-app
cd web-app

# Install dependencies
npm install

# Jalankan aplikasi (development mode)
npm run dev
```

## Using Datase from Kaggle : https://www.kaggle.com/datasets/kshitij192/cars-image-dataset?resource=download
