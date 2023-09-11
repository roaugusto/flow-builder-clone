import React from 'react';
import type { IRender } from '../index';
interface Iprops {
    renderNext: (params: IRender) => React.ReactNode;
}
declare const LoopNode: React.FC<Iprops>;
export default LoopNode;
