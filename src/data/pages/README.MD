# Guia de Criação de JSON para Páginas de Projeto

Este documento explica como criar arquivos JSON para popular a página de projetos renderizada pelo componente `ProjectPageComponent`.

Os arquivos JSON são carregados dinamicamente a partir do diretório:

```
/src/data/pages/
```

O nome do arquivo **deve corresponder ao `slug` do projeto**. Exemplo:

```
my-project.json
```

Caso o arquivo específico não exista, o sistema tentará carregar:

```
default.json
```

---

## Estrutura Geral do Arquivo

O JSON **deve ser um array de seções**, onde cada item representa um bloco da página.

```json
[
  {
    "type": "Hero",
    "data": { }
  },
  {
    "type": "Technologies",
    "data": { }
  }
]
```

Cada seção possui:

* `type`: identifica o tipo de renderização
* `data`: dados específicos daquela seção

---

## Tipos de Seção Suportados

### 1. Hero

Seção principal do projeto.

```json
{
  "type": "Hero",
  "data": {
    "image": "/images/projects/my-project/cover.jpg",
    "title": "My Project",
    "description": "Short description of the project.",
    "roles": ["Backend", "Frontend", "Architecture"]
  }
}
```

**Campos**:

* `image` (string): imagem principal
* `title` (string): título do projeto
* `description` (string): descrição curta
* `roles` (string[]): ocupações ou papéis

---

### 2. Technologies

Lista de tecnologias utilizadas.

```json
{
  "type": "Technologies",
  "data": {
    "technologies": [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite"
    ]
  }
}
```

---

### 3. GenericSection

Seção genérica de texto com ícone.

```json
{
  "type": "GenericSection",
  "data": {
    "icon": "wrench",
    "title": "Technical Challenges",
    "content": [
      "First paragraph.",
      "Second paragraph.",
      "Third paragraph."
    ]
  }
}
```

**Observações importantes**:

* O `icon` deve ser o nome de um ícone do **lucide-react**
* A primeira letra será automaticamente capitalizada

Exemplos válidos:

* `wrench`
* `target`
* `trendingUp`

---

### 4. MyRole

Bloco destacado descrevendo seu papel no projeto.

```json
{
  "type": "MyRole",
  "data": {
    "content": "I was responsible for the system architecture and backend integration."
  }
}
```

---

### 5. Gallery

Galeria de imagens.

```json
{
  "type": "Gallery",
  "data": {
    "title": "Screenshots",
    "images": [
      "/images/projects/my-project/1.png",
      "/images/projects/my-project/2.png",
      "/images/projects/my-project/3.png"
    ]
  }
}
```

---

### 6. Videos

Lista de vídeos do YouTube.

```json
{
  "type": "Videos",
  "data": {
    "videos": [
      {
        "videoId": "dQw4w9WgXcQ",
        "title": "Project Demo"
      },
      {
        "videoId": "abc123xyz",
        "title": "Technical Walkthrough"
      }
    ]
  }
}
```

---

## Exemplo Completo

```json
[
  {
    "type": "Hero",
    "data": {
      "image": "/images/projects/sample/cover.jpg",
      "title": "Sample Project",
      "description": "A complete example project page.",
      "roles": ["Full Stack Developer"]
    }
  },
  {
    "type": "Technologies",
    "data": {
      "technologies": ["React", "Vite", "Tailwind"]
    }
  },
  {
    "type": "GenericSection",
    "data": {
      "icon": "target",
      "title": "Project Goals",
      "content": [
        "Main goal of the project.",
        "Secondary objectives."
      ]
    }
  },
  {
    "type": "MyRole",
    "data": {
      "content": "I handled design decisions and implementation."
    }
  },
  {
    "type": "Gallery",
    "data": {
      "title": "Gallery",
      "images": [
        "/images/projects/sample/1.png",
        "/images/projects/sample/2.png"
      ]
    }
  }
]
```

---

## Regras Importantes

* O arquivo **deve exportar um array**
* A ordem das seções define a ordem da página
* Tipos desconhecidos são ignorados
* Em desenvolvimento, alterações no JSON recarregam automaticamente

---

## Fallback

Se o arquivo `<slug>.json` não existir, o sistema tenta carregar:

```
default.json
```

Use-o para páginas genéricas ou placeholders.
