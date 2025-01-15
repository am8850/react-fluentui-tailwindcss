import * as React from 'react';

import { DefaultButton, IStackStyles, IStackTokens, PrimaryButton, Slider, Stack } from "@fluentui/react"

const stackStyles: Partial<IStackStyles> = { root: { maxWidth: 300 } };
const stackTokens: IStackTokens = { childrenGap: 20 };
const sliderAriaValueText = (value: number) => `${value} percent`;
const sliderValueFormat = (value: number) => `${value}%`;

export const SliderBasicExample: React.FunctionComponent = () => {
  const [sliderValue, setSliderValue] = React.useState(0);
  const sliderOnChange = (value: number) => setSliderValue(value);
  return (
    <Stack tokens={stackTokens} styles={stackStyles}>
      <Slider aria-label="Basic example" />
      <Slider label="Snapping slider example" min={0} max={50} step={10} defaultValue={20} showValue snapToStep />
      <Slider label="Disabled example" min={50} max={500} step={50} defaultValue={300} showValue disabled />
      <Slider
        label="Controlled example"
        max={10}
        value={sliderValue}
        showValue
        // eslint-disable-next-line react/jsx-no-bind
        onChange={sliderOnChange}
      />
      <Slider
        label="Example with formatted value"
        max={100}
        ariaValueText={sliderAriaValueText}
        valueFormat={sliderValueFormat}
        showValue
      />
      <Slider label="Origin from zero" min={-5} max={5} step={1} defaultValue={2} showValue originFromZero />
    </Stack>
  );
};


function App() {
  //const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <header className="tw-h-[40px] tw-flex tw-items-center tw-bg-slate-950 tw-text-white tw-font-bold tw-px-2">App Name</header>
        <nav className="tw-flex tw-gap-2 tw-p-2 tw-h-[40px] tw-items-center tw-bg-slate-900">
          <div className="tw-w-full"></div>
          <DefaultButton text="Standard" />
          <PrimaryButton text="Primary" />
        </nav>
        <div className="tw-flex tw-h-[calc(100vh-120px)]">
          <aside className="tw-w-[300px] tw-bg-slate-800 tw-hidden md:tw-block tw-overflow-y-auto">aside</aside>
          <main className="tw-p-2 tw-w-full md:tw-w-[calc(100%-300px)] tw-bg-slate-100 tw-overflow-auto">
            <SliderBasicExample />
          </main>
        </div>
        <footer className="tw-h-[40px] tw-flex tw-items-center tw-bg-slate-900 tw-text-white">footer</footer>
      </div>
    </>
  )
}
export default App
