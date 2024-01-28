import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function customSlider({ onChange, value }) {

    return (
        <Box>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <Slider
                    aria-label="Small steps"
                    defaultValue={50}
                    step={1}
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                    value={value}
                    onChange={onChange}
                />
            </Stack>
            {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
        </Box>
    );
}