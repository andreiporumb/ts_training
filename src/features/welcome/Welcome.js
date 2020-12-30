import React, { useCallback, useState, useEffect} from 'react';
import { Typography, Grid } from '@material-ui/core';
import CustomTextField from 'components/CustomTextField/CustomTextField';
import CustomIconButton from 'components/IconButton/IconButton';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useTranslation } from 'react-i18next';
import { useEmail } from 'hooks/useEmail';
import { validateEmail } from 'utils/functions';
import { emptyString } from 'utils/constants';



function Welcome() {
  const { t } = useTranslation()
  
  const [isValid, setIsValid] = useState(true)
  
  const [email, setEmail] = useEmail()
  const [textFieldValue, setTextFieldValue] = useState(email)

  const handleTextFieldValueChange = useCallback((event) => setTextFieldValue(event.target.value), [])
  const handleButtonClick = useCallback(() => {
    const isEmailValid = validateEmail(textFieldValue)
    setEmail(isEmailValid ? textFieldValue : emptyString)
    setIsValid(isEmailValid) 
}, [setEmail, textFieldValue])

  const handleKeyDown = useCallback((event) => {
      if (event.keyCode === 13) {
          handleButtonClick()
      }
  }, [handleButtonClick])

  return (
      <Grid container justify="center" alignItems="center" alignContent="center" direction="column" spacing={10}>
          <Grid item xs={4}>
              <Typography variant="h5">{t("LandingPage.Title")}</Typography>
          </Grid>
          <Grid item container justify="center" alignItems="center" alignContent="center" direction="column" spacing={1}>
              <Grid item xs={4}>
                  <Typography variant="caption">{t("LandingPage.Subtitle")}</Typography>
              </Grid>
              <Grid item xs={4}>
                  <CustomTextField
                      fullWidth
                      endAdornment={
                          <CustomIconButton size="small" color="theme" aria-label="go" onClick={handleButtonClick}>
                              <KeyboardReturnIcon fontSize="small" />
                          </CustomIconButton>
                      }
                      debounceBy={0}
                      value={textFieldValue}
                      onChange={handleTextFieldValueChange}
                      onKeyDown={handleKeyDown}
                      helperText={!isValid && t("LandingPage.BadEmail")}
                      error={!isValid}
                  />
              </Grid>
          </Grid>
      </Grid>
  );
}

export default Welcome;