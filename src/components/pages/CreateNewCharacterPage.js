import axios from "axios";
import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Layout from "../Layout";

function CreateNewCharacterPage() {
  const [newCharForm, setNewCharForm] = useState({
    charStrength: "8",
    charConstitution: "8",
    charDexterity: "8",
    charIntelligence: "8",
    charWisdom: "8",
    charCharisma: "8",
    charName: "",
    charLevel: "1",
    charClass: "Warrior",
  });

  const onSubmitNewChar = async () => {
    console.log("starting onSubmitNewChar");
    console.log("This is your newCharForm: ", newCharForm);

    try {
      const response = await axios.post("http://localhost:6160/add-new-character", {
        ...newCharForm,
      });
      console.log(response);
    } catch (error) {
      console.log("error: ", error);
    }

  };

  //  I think I can make this more efficient by creating a list of the attributes, and then
  //  mapping over it to write all the code for me.
  return (
    <Layout>
      Create New Character
      <Box
        sx={{
          margin: 2,
          display: "flex",
          flexDirection: "row",
          border: "1px solid red",
        }}
      >
        <Box
          sx={{
            border: "1px solid blue",
            marginRight: 1,
          }}
        >
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-strength">Strength</InputLabel>
            <Select
              labelId="input-strength"
              id="input-strength"
              value={newCharForm.charStrength}
              label="Strength"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charStrength: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>STRENGTH</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-constitution">Constitution</InputLabel>
            <Select
              labelId="input-constitution"
              id="input-constitution"
              value={newCharForm.charConstitution}
              label="Constitution"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charConstitution: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>CONSTITUTION</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-dexterity">Dexterity</InputLabel>
            <Select
              labelId="input-dexterity"
              id="input-dexterity"
              value={newCharForm.charDexterity}
              label="Dexterity"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charDexterity: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>DEXTERITY</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-intelligence">Intelligence</InputLabel>
            <Select
              labelId="input-intelligence"
              id="input-intelligence"
              value={newCharForm.charIntelligence}
              label="Intelligence"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charIntelligence: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>INTELLIGENCE</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-wisdom">Wisdom</InputLabel>
            <Select
              labelId="input-wisdom"
              id="input-wisdom"
              value={newCharForm.charWisdom}
              label="Wisdom"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charWisdom: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>WISDOM</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
          <Box
            sx={{
              margin: 1,
            }}
          >
            <InputLabel id="input-charisma">Charisma</InputLabel>
            <Select
              labelId="input-charisma"
              id="input-charisma"
              value={newCharForm.charCharisma}
              label="Charisma"
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charCharisma: event.target.value,
                });
              }}
            >
              <MenuItem value="">
                <em>WISDOM</em>
              </MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid green",
            padding: 1,
          }}
        >
          <Box
            sx={{
              margin: 1,
            }}
          >
            <TextField
              id="character-name"
              label="Character Name"
              variant="standard"
              value={newCharForm.charName}
              onChange={(event) => {
                setNewCharForm({
                  ...newCharForm,
                  charName: event.target.value,
                });
              }}
            />
          </Box>

          <InputLabel id="input-class">Class</InputLabel>
          <Select
            labelId="input-class"
            id="input-class"
            value={newCharForm.charClass}
            label="Class"
            sx={{
              margin: 1,
            }}
            onChange={(event) => {
              setNewCharForm({
                ...newCharForm,
                charClass: event.target.value,
              });
            }}
          >
            <MenuItem value="">
              <em>Choose a class...</em>
            </MenuItem>
            <MenuItem value="Warrior">Warrior</MenuItem>
            <MenuItem value="Druid">Druid</MenuItem>
            <MenuItem value="Wizard">Wizard</MenuItem>
          </Select>

          <InputLabel id="input-level">Character Level</InputLabel>
          <Select
            labelId="input-level"
            id="input-level"
            value={newCharForm.level}
            label="Level"
            sx={{
              margin: 1,
            }}
            onChange={(event) => {
              setNewCharForm({
                ...newCharForm,
                level: event.target.value,
              });
            }}
          >
            <MenuItem value="">
              <em>Set your chracter's current level...</em>
            </MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="7">7</MenuItem>
            <MenuItem value="8">8</MenuItem>
            <MenuItem value="9">9</MenuItem>
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="11">11</MenuItem>
            <MenuItem value="12">12</MenuItem>
            <MenuItem value="13">13</MenuItem>
            <MenuItem value="14">14</MenuItem>
            <MenuItem value="15">15</MenuItem>
            <MenuItem value="16">16</MenuItem>
            <MenuItem value="17">17</MenuItem>
            <MenuItem value="18">18</MenuItem>
            <MenuItem value="19">19</MenuItem>
            <MenuItem value="20">20</MenuItem>
          </Select>
        </Box>
        <Box>
          <Button variant="contained" onClick={onSubmitNewChar}>
            Submit Your New Character!
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}

export default CreateNewCharacterPage;
