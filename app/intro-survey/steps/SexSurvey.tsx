const SexSurvey = () => {
    return (
        <div> 
            <input type="radio" id="male" name="sex" value="male" />
            <label htmlFor="male">MONKE </label>
            <input type="radio" id="female" name="sex" value="female" />
            <label htmlFor="female">MONKA</label>
        </div>
    )
}

export default SexSurvey;