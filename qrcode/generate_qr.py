import qrcode
import os

# Path to save the QR code
output_dir = "../static"
os.makedirs(output_dir, exist_ok=True)  # Create the directory if it doesn't exist
output_path = os.path.join(output_dir, "qr_code.png")

# Generate the QR code
url = "http://192.168.x.x:5000"  # Replace with your local server IP
qr = qrcode.QRCode(version=1, box_size=10, border=5)
qr.add_data(url)
qr.make(fit=True)

# Save the QR code
img = qr.make_image(fill="black", back_color="white")
img.save(output_path)

print(f"QR code saved at {output_path}")
