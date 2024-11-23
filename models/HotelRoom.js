const mongoose = require('mongoose');


// Connect to MongoDB
const dbURI = "Ymongodb+srv://user:5Nx8PsYMG1XCDAmV@cluster0.vryt6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(dbURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB:', err));

// Define a schema and model for Hotel Room
const hotelRoomSchema = new mongoose.Schema({
    roomNumber: { type: Number, required: true, unique: true },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    isBooked: { type: Boolean, default: false }
});

const HotelRoom = mongoose.model('HotelRoom', hotelRoomSchema);

module.exports = HotelRoom;