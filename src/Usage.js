import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const SAMPLE_CODE=`
const fs = require('fs');
const { createFFmpeg, fetchFile } = require('@ffmpeg/ffmpeg');

const ffmpeg = createFFmpeg({ log: true });

(async () => {
  await ffmpeg.load();
  ffmpeg.FS('writeFile', 'test.avi', await fetchFile('./test.avi'));
  await ffmpeg.run('-i', 'test.avi', 'test.mp4');
  fs.writeFileSync('./test.mp4', ffmpeg.FS('readFile', 'test.mp4'));
  process.exit(0);
})();
`.trim('\n');

const useStyles = makeStyles({
  root: {
    margin: '48px 0px 48px 0px',
  },
  para: {
    margin: '24px 0px 24px 0px',
  },
});

function ReadOnlyEditor(props) {
  return (
    <Highlight {...defaultProps} theme={vsDark} {...props}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre style={{fontSize: 18}}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

function Usage() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column" >
      <Typography align="center" variant="h4">
        Usage
      </Typography>
      <Typography className={classes.para} align="center" variant="h6">
        With few lines of code you can use ffmpeg.wasm
      </Typography>
      <ReadOnlyEditor
        language="javascript"
        code={SAMPLE_CODE}
      />
    </Grid>
  );
}

export default Usage;
