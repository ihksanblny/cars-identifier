// src/constants/carData.ts

export interface CarSpecs {
  engine: string;
  power: string;
  category: string;
  price: string;
  description: string;
}

export const CAR_METADATA: Record<string, CarSpecs> = {
  'Audi': {
    engine: '2.0L TFSI I4',
    power: '190 - 245 HP',
    category: 'Luxury Sedan / SUV',
    price: 'Rp 1.2M - 2.5M+',
    description: 'Simbol kemewahan dan teknologi Jerman dengan sistem penggerak Quattro yang ikonik.'
  },
  'Hyundai Creta': {
    engine: '1.5L Smartstream',
    power: '115 HP',
    category: 'Compact SUV',
    price: 'Rp 290jt - 410jt',
    description: 'SUV urban yang futuristik dengan fitur Hyundai SmartSense dan konektivitas Bluelink.'
  },
  'Mahindra Scorpio': {
    engine: '2.2L mHawk Diesel',
    power: '130 - 175 HP',
    category: 'Rugged SUV',
    price: 'Rp 350jt - 500jt (Est.)',
    description: 'SUV tangguh dengan sasis tangga (ladder frame) yang siap melibas medan off-road berat.'
  },
  'Rolls Royce': {
    engine: '6.75L V12 Twin-Turbo',
    power: '563 HP',
    category: 'Ultra-Luxury',
    price: 'Rp 15M - 25M++',
    description: 'Puncak kemewahan otomotif dunia. Dibuat dengan tangan secara presisi untuk kenyamanan tiada tara.'
  },
  'Swift': {
    engine: '1.2L DualJet',
    power: '83 - 90 HP',
    category: 'Hatchback',
    price: 'Rp 180jt - 250jt',
    description: 'Mobil perkotaan yang lincah, irit bahan bakar, dan memiliki handling yang sangat menyenangkan.'
  },
  'Tata Safari': {
    engine: '2.0L Kryotec Diesel',
    power: '170 HP',
    category: 'Premium SUV',
    price: 'Rp 400jt - 600jt (Est.)',
    description: 'SUV keluarga 7-seater yang legendaris, kini hadir dengan platform Land Rover D8.'
  },
  'Toyota Innova': {
    engine: '2.0L Petrol / 2.4L Diesel',
    power: '139 - 149 HP',
    category: 'MPV',
    price: 'Rp 380jt - 600jt+',
    description: 'Mobil keluarga paling terpercaya di Indonesia. Luas, nyaman, dan memiliki nilai jual kembali yang tinggi.'
  }
};