const contacts = ["+918248005808"]; // Replace with your real contacts

window.onload = () => {
  const list = document.getElementById("contactList");
  contacts.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });
};

function shareLocation() {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const mapLink = `https://maps.google.com/?q=${lat},${lon}`;
      const message = `It's an emergency! Help me!!! My location: ${mapLink}`;

      contacts.forEach(num => {
        const phone = num.replace("+", "");
        const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(waUrl, "_blank");
      });
    },
    error => {
      alert("Could not get location. Please enable location services.");
    }
  );
}


