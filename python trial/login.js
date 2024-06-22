function sendOTP() {
    // ... existing code ...
    if (!document.getElementById('phone-number').value) {
        alert("कृपया वैध फोन नंबर दर्ज करें");
        return;
    }
    // ... existing code ...
}

function verifyOTP() {
    // ... existing code ...
    if (!document.getElementById('otp').value) {
        alert("कृपया OTP दर्ज करें");
        return;
    }
    // ... existing code ...
}

function setPassword() {
    // ... existing code ...
    if (!document.getElementById('new-password').value) {
        alert("कृपया नया पासवर्ड दर्ज करें");
        return;
    }
    // ... existing code ...
}