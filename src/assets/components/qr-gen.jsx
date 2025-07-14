// QRGenerator.jsx
import { QRCodeSVG } from 'qrcode.react';

const QRGenerator = ({ url }) => {
    return (
        <div className="w-full">
            <QRCodeSVG
                value={url}
                fgColor="var(--qrCode)"
                bgColor="transparent"
            />
        </div>
    );
};

export default QRGenerator;
