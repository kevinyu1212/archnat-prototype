import { useState } from 'react';
import ExifReader from 'exifreader';

export const useObservationUpload = () => {
    const [meta, setMeta] = useState(null);

    const handleFileChange = async (file) => {
        const tags = await ExifReader.load(file);
        const lat = tags['GPSLatitude']?.description;
        const lng = tags['GPSLongitude']?.description;
        const date = tags['DateTimeOriginal']?.description;
        
        // 네이처링처럼 자동으로 위치/시간 세팅
        setMeta({ lat, lng, date });
        
        // 즉시 AI 서버에 분석 요청 (Vibe: 비동기 처리)
    };

    return { handleFileChange, meta };
};
