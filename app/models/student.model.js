module.exports = mongoose => {
    const Student = mongoose.model(
        "student",
        mongoose.Schema({
            numdocument: { type: Number, required: true },
            name: { type: String, required: true },
            lastname: { type: String, required: true },
            age: { type: Number, required: true },
            note: { type: Number, required: true }
        }, { timestamps: false })
    );

    return Student;
};