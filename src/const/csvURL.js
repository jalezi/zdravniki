const ORIGIN = 'https://raw.githubusercontent.com';
const BASE_URL = new URL(ORIGIN);

const BASE_PATH = '/sledilnik/zdravniki-data/main/csv';

const INSTITUTIONS_CSV_PATH = `${BASE_PATH}/dict-institutions.csv`;
const DOCTOR_TYPES_CSV_PATH = `${BASE_PATH}/dict-doctors.csv`;
const DOCTORS_PATH = `${BASE_PATH}/doctors.csv`;

export const INSTITUTIONS = new URL(INSTITUTIONS_CSV_PATH, BASE_URL);
export const DOCTOR_TYPES = new URL(DOCTOR_TYPES_CSV_PATH, BASE_URL);
export const DOCTORS = new URL(DOCTORS_PATH, BASE_URL);
