import { useState, useEffect } from "react";
import "./controller.css";
import { musicas } from "../musics/musics.js";

let indiceMusicaAtual = 0;
let audioPlayer = null;

const Controller = () => {
  const [musicaAtual, setMusicaAtual] = useState(musicas[indiceMusicaAtual]);
  const [progressoMusica, setProgressoMusica] = useState(0);
  const [isTocando, setIsTocando] = useState(false);
  const [showMusicList, setShowMusicList] = useState(false);

  const tocarPausarMusica = () => {
    if (!audioPlayer) {
      audioPlayer = new Audio(musicaAtual.musica);
      audioPlayer.addEventListener("timeupdate", atualizarProgressoMusica);
    } else {
      audioPlayer.src = musicaAtual.musica;
      audioPlayer.load();
    }
    if (isTocando) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    setIsTocando(!isTocando);
  };
  const atualizarProgressoMusica = () => {
    if (audioPlayer && audioPlayer.duration > 0) {
      const progressoAtual = audioPlayer.currentTime / audioPlayer.duration;
      setProgressoMusica(progressoAtual);

      if (progressoAtual >= 0.99) {
        avancarMusica();
      }
    }
  };
  const avancarMusica = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer = null;
    }

    indiceMusicaAtual = (indiceMusicaAtual + 1) % musicas.length;
    setMusicaAtual(musicas[indiceMusicaAtual]);
    setProgressoMusica(0);
    tocarPausarMusica();
  };

  const voltarMusica = () => {
    if (audioPlayer) {
      audioPlayer.pause();
      audioPlayer = null;
    }

    indiceMusicaAtual =
      (indiceMusicaAtual - 1 + musicas.length) % musicas.length;
    setMusicaAtual(musicas[indiceMusicaAtual]);
    setProgressoMusica(0);
    tocarPausarMusica();
  };

  const handleMusicListClick = () => {
    setShowMusicList(!showMusicList);
  };

  const tocarMusicaFromList = (musicaIndex) => {
    indiceMusicaAtual = musicaIndex;
    setMusicaAtual(musicas[indiceMusicaAtual]);
    setProgressoMusica(0);
    tocarPausarMusica();
    handleMusicListClick();
    setShowMusicList(false);
  };

  useEffect(() => {
    return () => {
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer = null;
      }
    };
  }, []);

  return (
    <section className="section-music-list">
      <div className="container-music-list">
        <div className="box-music-list">
          {musicas.map((musica, index) => (
            <div key={index} className="music-item-list">
              <img
                src={musica.imagem}
                alt={musica.nome}
                className="music-image-list"
                onClick={() => tocarMusicaFromList(index)}
              />
              <div className="music-information-list">
                <div>
                  <span>Musica</span>
                  <p>{musica.nome}</p>
                </div>
                <div>
                  <span>Banda</span>
                  <p>{musica.banda}</p>
                </div>
                <div>
                  <span>Genero</span>
                  <p>{musica.genero}</p>
                </div>
                <div>
                  <span>Duração</span>
                  <p>{musica.duracao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="controller-menu">
        <div className="container-music-information">
          <img
            src={musicaAtual.imagem}
            alt={musicaAtual.nome}
            className="music-logo"
            title={musicaAtual.nome}
          />
          <div className="music-information">
            <p id="nome">{musicaAtual.nome}</p>
            <p id="banda">{musicaAtual.banda}</p>
          </div>
          <span className="material-symbols-outlined">star</span>
        </div>
        <div className="controller-button">
          <div className="teste-one">
            <span className="material-symbols-outlined" onClick={voltarMusica}>
              arrow_back_ios_new
            </span>
            <span
              className="material-symbols-outlined"
              onClick={tocarPausarMusica}
            >
              {isTocando ? "pause_circle" : "play_circle"}
            </span>
            <span className="material-symbols-outlined" onClick={avancarMusica}>
              arrow_forward_ios
            </span>
            <div className="progress-bar">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={progressoMusica}
                onChange={(e) => {
                  if (audioPlayer) {
                    audioPlayer.currentTime =
                      e.target.value * audioPlayer.duration;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Controller;
