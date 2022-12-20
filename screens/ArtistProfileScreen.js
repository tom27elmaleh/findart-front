import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import ArtistProfileRow from "../components/ArtistProfileRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import ProfileButton from "../utils/ProfileButton";
import HeaderGoBack from "../utils/HeaderGoBack";

export default function ArtistProfileScreen() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");
  const [insta, setInsta] = useState("");
  const [link, setLink] = useState("");
  const [hourly, setHourly] = useState("");
  const [packageRate, setPackageRate] = useState("");
  const [type, setType] = useState("");
  const [format, setFormat] = useState("");
  const [instrument, setInstrument] = useState("");
  const [camera, setCamera] = useState("");

  const [messageModal, setMessageModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const currentArtist = useSelector((state) => state.artist.value);

  useEffect(() => {
    setData();
  }, []);

  function setData() {
    fetch(`http://192.168.10.188:3000/artists/${currentArtist.token}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setUsername(data.artist.username);
          setEmail(data.artist.email);
          setCountry(data.artist.address.country);
          setCity(data.artist.address.city);
          setPostalCode(data.artist.address.postalCode);
          setStyle(data.artist.style);
          setDescription(data.artist.description);
          setType(data.artist.type);
          setInsta(data.artist.insta);
          setLink(data.artist.link);
          setHourly(data.artist.rate.hourly);
          setPackageRate(data.artist.rate.package);
          setCamera(data.artist.camera);
          setInstrument(data.artist.instrument);
          setFormat(data.artist.format);
        }
      });
  }

  function setUsernameFunc(value) {
    setUsername(value);
  }
  function setCountryFunc(value) {
    setCountry(value);
  }
  function setCityFunc(value) {
    setCity(value);
  }
  function setPostalCodeFunc(value) {
    setPostalCode(value);
  }
  function setStyleFunc(value) {
    setStyle(value);
  }
  function setInstaFunc(value) {
    setInsta(value);
  }
  function setLinkFunc(value) {
    setLink(value);
  }
  function setHourlyFunc(value) {
    setHourly(value);
  }
  function setPackageRateFunc(value) {
    setPackageRate(value);
  }
  function setDescriptionFunc(value) {
    setDescription(value);
  }
  function setCameraFunc(value) {
    setCamera(value);
  }
  function setInstrumentFunc(value) {
    setInstrument(value);
  }
  function setFormatFunc(value) {
    setFormat(value);
  }

  const updateProfile = () => {
    fetch(`http://192.168.10.188:3000/artists/${currentArtist.token}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: type,
        username: username,
        description: description,
        insta: insta,
        city: city,
        postalCode: postalCode,
        country: country,
        hourly: hourly,
        package: packageRate,
        instrument: instrument,
        formatPhoto: format,
        camera: camera,
        link: link,
        style: style,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setMessageModal("Les informations ont bien été mis à jour");
          setData();
          setShowModal(true);
          Keyboard.dismiss();
        } else if (!data.result && data.error === "missing field") {
          setMessageModal("Veuillez renseigner un pseudo et une description");
          setShowModal(true);
        } else {
          setMessageModal("Erreur de modification des informations");
          setShowModal(true);
        }
      });
  };

  const hideModal = () => {
    setMessageModal("");
    setShowModal(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <Modal visible={showModal} animationType="fade" transparent>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>{messageModal}</Text>
            <TouchableOpacity
              onPress={() => hideModal()}
              style={styles.btnBackHome}
            >
              <Text style={{ color: "white" }}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <HeaderGoBack name="Informations profil" />
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.subtitle}> Informations personelles</Text>

          <ArtistProfileRow
            editable={true}
            title="Pseudo"
            value={username}
            function={setUsernameFunc}
          />
          <ArtistProfileRow
            editable={false}
            title="Adresse mail"
            value={email}
            separation={true}
          />
          <Text style={styles.subtitle}> Adresse</Text>
          <ArtistProfileRow
            editable={true}
            title="Pays"
            value={country}
            function={setCountryFunc}
          />
          <ArtistProfileRow
            editable={true}
            title="Ville"
            value={city}
            function={setCityFunc}
          />
          <ArtistProfileRow
            editable={true}
            title="Code Postal"
            value={postalCode}
            function={setPostalCodeFunc}
            separation={true}
          />
          <Text style={styles.subtitle}>Informations artiste</Text>
          <ArtistProfileRow editable={false} title="Catégorie" value={type} />
          <ArtistProfileRow
            editable={true}
            title="Style"
            value={style}
            function={setStyleFunc}
          />
          <ArtistProfileRow
            editable={true}
            title="Description"
            function={setDescriptionFunc}
            value={description}
          />
          <ArtistProfileRow
            editable={true}
            title="Lien instagram"
            value={insta}
            function={setInstaFunc}
          />
          <ArtistProfileRow
            editable={true}
            title="Lien artiste"
            value={link}
            function={setLinkFunc}
          />
          <ArtistProfileRow
            isNum={true}
            editable={true}
            title="Prix horaire € / h"
            value={`${hourly}`}
            function={setHourlyFunc}
          />
          <ArtistProfileRow
            isNum={true}
            editable={true}
            title="Forfait jour € / jour"
            value={`${packageRate}`}
            function={setPackageRateFunc}
          />
          {instrument && (
            <ArtistProfileRow
              editable={true}
              title="Instrument"
              value={instrument}
              function={setInstrumentFunc}
            />
          )}
          {format && (
            <ArtistProfileRow
              editable={true}
              title="Format photo"
              value={format}
              function={setFormatFunc}
            />
          )}
          {camera && (
            <ArtistProfileRow
              editable={true}
              title="Format photo"
              value={camera}
              function={setCameraFunc}
            />
          )}
        </ScrollView>
        <View style={{ alignItems: "center", width: "100%" }}>
          <ProfileButton function={updateProfile} text="Sauvegarder" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 27,
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    padding: 10,
  },
  modal: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnBackHome: {
    width: 200,
    height: 50,
    backgroundColor: "#264466",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
