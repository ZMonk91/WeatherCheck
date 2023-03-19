import React from "react";
import { Button } from "@chakra-ui/react";

function ChangeLocationButton({setWeather}) {
    const resetWeather = () => {
        setWeather('')
    }
    return <Button onClick={resetWeather} bg={'Background'}>
        Change Location
    </Button>
}

export default ChangeLocationButton