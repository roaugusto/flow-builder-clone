import React from 'react';
import type { INode, IRender } from '../index';
interface IProps {
    parentNode?: INode;
    conditionIndex: number;
    renderNext: (params: IRender) => React.ReactNode;
}
declare const ConditionNode: React.FC<IProps>;
export default ConditionNode;
