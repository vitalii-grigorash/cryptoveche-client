import React from "react";
import './ScanQRMobile.css';
import qr_code_icon from '../../img/ScanQRMobile_icon.svg';

const ScanQRMobile = () => {

    return (
        <div className={'scan-qr-code-wrapper'}>
            <span>Сканировать QR-код</span><img alt={'иконка qr-кода'} src={qr_code_icon}/>
        </div>
    )

}

export default ScanQRMobile;