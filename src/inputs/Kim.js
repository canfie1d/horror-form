import Flex from "../Flex";

const KimInput = ({label1, label2, name1, name2, onChange, value, value2}) => {
  return (
    <div className='kim'>
      <section className='section'>
        {/* <div className='form'>
          <label htmlFor='username'>{label}</label>
          <select name={name} id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name={name} id="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="user-name" id="user-name-4">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
          <select name="username-01" id="username-01" form="username-01">
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
            <option value="e">e</option>
            <option value="f">f</option>
            <option value="g">g</option>
            <option value="h">h</option>
            <option value="i">i</option>
            <option value="j">j</option>
            <option value="k">k</option>
            <option value="l">l</option>
            <option value="m">m</option>
            <option value="n">n</option>
            <option value="o">o</option>
            <option value="p">p</option>
            <option value="q">q</option>
            <option value="r">r</option>
            <option value="s">s</option>
            <option value="t">t</option>
            <option value="u">u</option>
            <option value="v">v</option>
            <option value="w">w</option>
            <option value="x">x</option>
            <option value="y">y</option>
            <option value="z">z</option>
          </select>
        </div> */}
        <Flex>
          <Flex.Column>
            <div className='form'>
              <label htmlFor='input'>{label1}</label>
              <input name={name1} className='danger' id='input' onChange={(e)=>onChange({name: name1, value: e.target.value})} />
            </div>
          </Flex.Column>
          <Flex.Column>
            <div className='form'>
              <label htmlFor='input'>{label2}</label>
              <input name={name2} id='input' onChange={(e) => onChange({name: name2, value: e.target.value})} />
            </div>
          </Flex.Column>
        </Flex>
          <p className='text-danger'>{value !== '' ? value : 'This password'} is already taken. Please use another!</p>
          {value !== value2 && (
            <p className='text-danger'>Passwords must match!</p>
          )}
      </section>
    </div>
  )
}

export default KimInput;
