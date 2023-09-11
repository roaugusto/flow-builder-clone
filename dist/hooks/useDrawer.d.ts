declare const useDrawer: () => {
    closeDrawer: () => void;
    saveDrawer: (values: any, validateStatusError?: boolean) => void;
};
export default useDrawer;
