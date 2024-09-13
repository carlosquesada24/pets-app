const AUTHENTICATION_PREFIX = "/authentication";
const PETS_PREFIX = "/my-pets";

export default {
    HOMEPAGE: "/",
    AUTHENTICATION: {
        SIGN_IN: `${AUTHENTICATION_PREFIX}/sign-in/`,
        SIGN_UP: `${AUTHENTICATION_PREFIX}/sign-up/`,
        PROFILE: `${AUTHENTICATION_PREFIX}/profile/`,
        RESET_PASSWORD: `${AUTHENTICATION_PREFIX}/reset-password/`,
    },
    PETS: {
        MY_PETS: `${PETS_PREFIX}`,
        ADD_PET: `${PETS_PREFIX}/add-pet/`,
    }
}