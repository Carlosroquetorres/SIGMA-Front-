import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './comp/Login'; 
import HomeScreen from './HomeScreen'; 
import QuejaScreen from './QuejaScreen';
import FormEst from './FromEstScreen';
import FormAdm from './FromAdmScreen';
import FormOtr from './FromOtrScreen';
import AdQue from './AdQueScreen';
import OpAd from './OpAdScreen';
import AdmRev from './AdminRevScreen';
import AdminSubAca from './AdminSubAcaScreen';
import AdminSerAdmin from './AdminSerAdminScreen';
import AdminPlanVinc from './AdminPlanVincScreen';
import PolIG from './IGND/PoliticIguaScreen';
import SubEti from './IGND/SubEticaScreen';
import MecDen from './IGND/MecDenunciaScreen';
import DenAco from './IGND/DenAcosoScreen';
import DenNorm from './IGND/DenIncNormasScreen';
import FormDA from './IGND/FormDenAcScreen';
import FormIN from './IGND/FormDenNormScreen';
import DocHome from './DOC/DocumentoScreen';
import DocHome2 from './DOC/DocumentoScreen2';
import DocHome3 from './DOC/DocumentoScreen3';
import BuscDoc from './DOC/BuscarScreen';
import EditHomeDoc from './DOC/EditarHomeScreen';
import AgregarDoc from './DOC/AgregarScreen';
import EditarDoc from './DOC/EditarScreen';
import TramitesHome from './TS/TramitesHome';
import TramitesCategory from './TS/TramitesCategory';
import DetailsTramite from './TS/DetailsTramite';
import FormTramite from './TS/FormTramite';

const Stack = createStackNavigator()

    const MainStack = () =>{

        return(
            

            <NavigationContainer horizontal={false}>
                <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="Login" component={Login} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="Quejas" component={QuejaScreen} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormEst" component={FormEst} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormAdm" component={FormAdm} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormOtr" component={FormOtr} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AdQue" component={AdQue} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="OpAd" component={OpAd} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="PolIG" component={PolIG} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="SubEti" component={SubEti} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="MecDen" component={MecDen} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DenAco" component={DenAco} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DenNorm" component={DenNorm} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormDA" component={FormDA} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormIN" component={FormIN} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AdmRev" component={AdmRev} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AdminSubAca" component={AdminSubAca} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AdminSerAdmin" component={AdminSerAdmin} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AdminPlanVinc" component={AdminPlanVinc} />

                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DocHome" component={DocHome} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DocHome2" component={DocHome2} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DocHome3" component={DocHome3} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="BuscDoc" component={BuscDoc} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="EditHomeDoc" component={EditHomeDoc} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="AgregarDoc" component={AgregarDoc} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="EditarDoc" component={EditarDoc} />

                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="TramitesHome" component={TramitesHome} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="TramitesCategory" component={TramitesCategory} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="DetailsTramite" component={DetailsTramite} />
                <Stack.Screen options={{ headerShown: false, gestureEnabled: false}} name="FormTramite" component={FormTramite} />
                </Stack.Navigator>
            </NavigationContainer>
          
        )

    }

export default MainStack;