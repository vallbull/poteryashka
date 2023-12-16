import numpy as np
import qrcode


def generate_qrs(amount):
    # считать номер n с файла(если ничего не лежит то n=0), циклом от  in range(n, n+amount) генерировать куары и складывать в папку QRs
    # в конце записать в файл число amount+n+1
    with open("last_qr_number.txt", "r") as f:
        n = int(f.read())
        for i in range(n, n + amount):
            print(i)
            # data to encode
            data = f"http://158.160.97.240/get_pet?id={i}"
            # instantiate QRCode object
            qr = qrcode.QRCode(version=1, box_size=10, border=4)
            # add data to the QR code
            qr.add_data(data)
            # compile the data into a QR code array
            qr.make()
            # print the image shape
            # transfer the array into an actual image
            img = qr.make_image(fill_color="white", back_color="black")
            # save it to a file
            img.save(f"QRs/{i}.png")
    with open("last_qr_number.txt", "w") as f:
        f.write(str(n + amount))


generate_qrs(2)
