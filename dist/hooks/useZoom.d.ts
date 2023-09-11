import type { ZoomType } from '../index';
declare const useZoom: () => {
    minZoom: number;
    maxZoom: number;
    zoom: (type: ZoomType | number) => void;
};
export default useZoom;
