import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1000,
      height: 480,
    },
  );
}