import React from 'react';
import {RedocStandalone} from 'redoc';

/**
 * Source: https://github.com/Redocly/redoc
 *         https://stackoverflow.com/questions/61346751/can-we-replace-swagger-ui-with-redoc-in-springdoc
 *         https://springdoc.org/
 */

const Redoc= () => {
    return (
        <RedocStandalone
            specUrl="v2/api-docs "
            options={{
                nativeScrollbars: true,
                theme: {colors: {primary: {main: '#dd5522'}}},
            }}
        />
    );
};

export default Redoc;
