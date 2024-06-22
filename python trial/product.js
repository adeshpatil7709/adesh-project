function checkPassword() {
    const password = document.getElementById('password').value;
    // Improved password check with case insensitivity
    if (password.toUpperCase() === "ADESH") {
        document.getElementById('product-name').style.display = 'block';
        document.getElementById('password').style.display = 'none';
        document.getElementById('feedback').textContent = 'कृपया उत्पाद का नाम दर्ज करें।';
    } else {
        document.getElementById('feedback').textContent = 'गलत पासवर्ड, पुनः प्रयास करें।';
    }
    // Adding a feature to clear the password field after each attempt
    document.getElementById('password').value = '';
}
function handleSubmit() {
    // यहाँ आपके सबमिशन लॉजिक होगा
    document.getElementById('feedback').textContent = 'सफलतापूर्वक सबमिट किया गया।';
}

// यह कोड सबमिट बटन के लिए इवेंट लिसनर जोड़ता है
document.getElementById('submit-button').addEventListener('click', handleSubmit);