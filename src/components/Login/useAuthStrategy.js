import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../Js/funcoes";
import { useNavigate } from 'react-router-dom';

const useAuthStrategy = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate(); 

    const signIn = (email, password) => {
        signInWithEmailAndPassword(email, password)
            .then(() => navigate('/Painel'))
            .catch((error) => {
                console.error(error);
            });
    };

    return { signIn, user, loading, error };
};

export default useAuthStrategy;
