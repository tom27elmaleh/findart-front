import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import ArtistProfileRow from "../components/ArtistProfileRow";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function ArtistProfileScreen() {
  const [artist, setArtist] = useState([]);

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

  const currentArtist = useSelector((state) => state.artist.value);

  useEffect(() => {
    setData();
  }, []);

  function setData() {
    fetch(`https://findart-back.vercel.app/artists/${currentArtist.token}`)
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
    fetch(`https://findart-back.vercel.app/artists/${currentArtist.token}`, {
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
          setData();
          Keyboard.dismiss();
        } else {
          console.log("result false");
        }
      });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Informations profil</Text>
          <Button title="Sauvegarder" onPress={() => updateProfile()}></Button>
        </View>
        <ScrollView>
          <Text style={styles.subtitle}> Informations personelles</Text>
          {/* <View style={styles.photo}> 
                <Text>Photo de profil</Text>
                <Image style={styles.profilePicture} source={{ uri: `http://192.168.1.17:3000/assets/logo.png` }}/>
            </View> */}
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
            editable={true}
            title="Prix horaire"
            value={`${hourly}€ / h`}
            function={setHourlyFunc}
          />
          <ArtistProfileRow
            editable={true}
            title="Forfait jour"
            value={`${packageRate}€ / jour`}
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
  // photo: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  // }
});
