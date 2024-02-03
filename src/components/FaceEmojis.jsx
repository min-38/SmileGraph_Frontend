import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { good, normal, bad } from '../constants/emoji'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function FaceEmojis({onClick}) {
    return (
        <div>
            <div className='emojiSelectArea'>
                <p>Good</p>
                <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                    {
                        good.map(function(emoji) {
                            return (
                                <Item
                                    key={emoji}
                                    className='emojiBtn'
                                    sx={{ maxWidth: 'md' }}
                                    onClick={onClick}
                                >
                                    {emoji}
                                </Item>
                            )
                        })
                    }
                </Stack>
            </div>
            <div className='emojiSelectArea'>
                <p>Normal</p>
                <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                    {
                        normal.map(function(emoji) {
                            return (
                                <Item
                                    key={emoji}
                                    className='emojiBtn'
                                    sx={{ maxWidth: 'md' }}
                                    onClick={onClick}
                                >
                                    {emoji}
                                </Item>
                            )
                        })
                    }
                </Stack>
            </div>
            <div className='emojiSelectArea'>
                <p>Bad</p>
                <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
                    {
                        bad.map(function(emoji) {
                            return (
                                <Item
                                    key={emoji}
                                    className={`emojiBtn`}
                                    sx={{ maxWidth: 'md' }}
                                    onClick={onClick}
                                >
                                    {emoji}
                                </Item>
                            )
                        })
                    }
                </Stack>
            </div>
        </div>
    );
}