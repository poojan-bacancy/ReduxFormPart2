import React from 'react'
import { View , Text } from 'react-native'
import { Field, reduxForm } from 'redux-form'

import Styles from './Styles'
import { FormInput , CustomButton } from 'components'
import { emailRequired, validateEmail } from 'utils/Validations'
import { SUBMIT_BUTTON , placeholders, VERIFY_EMAIL_DETAILS } from './constants'

const VerifyEmail = ({handleSubmit,nextPage}) => {
    return (
        <View style={Styles.form}>

            <Text style={Styles.detailText}>{VERIFY_EMAIL_DETAILS}</Text>

            <Field 
                name="email"
                returnKeyType="done"
                autoCapitalize="none"
                component={FormInput}
                keyboardType="email-address"
                placeholder={placeholders.VERIFY_EMAIL}
                validate={[emailRequired,validateEmail]}
                onSubmitEditing= {handleSubmit(nextPage)}
            />

            <View style={Styles.buttonContainer}>
                <CustomButton 
                    style={Styles.button} 
                    buttonLabel={SUBMIT_BUTTON} 
                    onPress={handleSubmit(nextPage)}
                />               
            </View>
            
        </View>
    )
}

export default reduxForm({
    form : 'forgot-password'
})(VerifyEmail)
