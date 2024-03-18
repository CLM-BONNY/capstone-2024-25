import styled from 'styled-components';
import Input from '../Input';

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 98%;
  gap: 8px;
  box-sizing: border-box;
`;

const StepTitle = styled.div`
  align-self: flex-start;
  font-size: 24px;
  margin-bottom: 32px;
`;

const StepName = ({ value, setValue }) => {
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <StepWrapper>
      <StepTitle>이름 *</StepTitle>
      <Input
        text={value}
        inputInfo="이름을 입력해주세요"
        onChange={handleInputChange}
      />
    </StepWrapper>
  );
};
export default StepName;
