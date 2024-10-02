'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { blue, green, red } from '@mui/material/colors';
import ReactWordcloud from 'react-wordcloud';

import { words } from './data';

export function AudienceTalk(): React.JSX.Element {
  const callbacks = {
    getWordColor: (word: any) => (word.value < 50 ? blue[600] : word.value <= 150 ? green[600] : red[600]),
    onWordClick: console.log,
    onWordMouseOver: console.log,
    getWordTooltip: (word: any) => `${word.text} (${word.value}) [${word.value > 50 ? 'good' : 'bad'}]`,
  };
  const options: { rotations: number; rotationAngles: [number, number] } = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };

  return (
    <Card>
      <CardHeader title="Audience Talk About" />
      <CardContent>
        <ReactWordcloud callbacks={callbacks} options={options} words={words} />
      </CardContent>
    </Card>
  );
}
