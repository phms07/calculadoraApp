import styled from "styled-components/native";

export const MainContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #17171C;
`;

export const Header = styled.View`
  background-color: #33333F;
`;

export const OperationArea = styled.View`
  height: 35px;
  width: 100%;
  margin: 45px 0 -10px 0;
`;

export const OperationText = styled.Text`
  font-family: "JetBrainsMono-Medium";
  font-size: 26px;
  text-align: right;
  margin-right: 15px;
  color: #75778B;
`;

export const ResultArea = styled.View`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 145px;
  margin: 25px 0;
`;

export const EqualSignArea = styled.View`
  justify-content: center;
`;

export const EqualSignText = styled.Text`
  font-family: "JetBrainsMono-Medium";
  font-size: 70px;
  text-align: left;
  margin: 0 15px;
  color: #75778B;
`;

export const Result = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ResultText = styled.Text`
  font-family: "SpaceMono-Bold";
  font-size: 90px;
  text-align: right;
  margin: 0 15px;
  top: -10px;
  color: #FFFFFF;
`;

export const BtnContainer = styled.View`
  margin: 40px 0 -245px 0;
`;

export const BtnArea = styled.View`
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 5px 8px;
`;

export const Btn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 80px;
  margin: 0 10px 10px 10px;
  border-radius: 24px;
  background-color: #2E2F38;
`;

export const OthersBtn = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 80px;
  margin: 0 10px 10px 10px;
  border-radius: 24px;
  background-color: #4E505F;
`;

export const BtnClean = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 80px;
  margin: 0 10px 10px 10px;
  border-radius: 24px;
  background-color: #FF004D;
`;

export const BtnOperation = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 80px;
  margin: 0 10px 10px 10px;
  border-radius: 24px;
  background-color: #9505E3;
`;

export const BtnResult = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 80px;
  margin: 0 10px 10px 10px;
  border-radius: 24px;
  background-color: #53E305;
`;

export const BtnText = styled.Text`
  font-family: "LexendDeca-Medium";
  text-align: center;
  font-size: 35px;
  color: #FFFFFF;
`;

export const BtnOperationText = styled.Text`
  font-family: "SourceCodePro-Medium";
  font-size: 40px;
  color: #FFFFFF;
`;