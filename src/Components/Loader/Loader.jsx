import React from 'react';
import { useNavigation } from 'react-router-dom';

const Loader = () => {
    const navigation = useNavigation();
    
    return (
        <div className="text-center">
            {
                navigation.state === 'loading' ? <progress className="progress w-56"></progress> : ''
            }
        </div>
    );
};

export default Loader;