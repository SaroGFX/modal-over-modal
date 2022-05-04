
import { useRef, useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonButton,
  IonPage,
  IonItem,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
import { Router } from 'workbox-routing';


interface HomePageProps {
  router: HTMLIonRouterOutletElement | null;
}


const Home: React.FC<HomePageProps> = ({  }) => {
  const pageRef = useRef(null);
  const modalRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);




  return (
    <IonPage ref={pageRef} id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal over modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonButton onClick={() => setShowModal(true)} expand='block' color='danger'>
            Open Modal
          </IonButton>

          <IonModal 
            ref={modalRef}
            presentingElement={pageRef.current || undefined}
            canDismiss={true}
            showBackdrop={true}    
            isOpen={showModal} 
            onDidDismiss={() => setShowModal(false)}
          >

            <IonToolbar color='primary'>
                <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
                <IonTitle>Modal 1</IonTitle>
              </IonToolbar>
            <IonContent>
              
              <IonButton onClick={() => setShowModal2(true)} expand='block' color='primary'>
                Open Modal 2
              </IonButton>

            <IonModal
              presentingElement={modalRef.current || undefined}
              canDismiss={true}
              isOpen={showModal2}
              onDidDismiss={() => setShowModal2(false)}
            >

              <IonToolbar color='warning'>
                <IonTitle>Modal 2</IonTitle>
              </IonToolbar>
              <IonContent>
                Modal 2
              </IonContent>
          </IonModal>
        


            </IonContent>
          </IonModal>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
