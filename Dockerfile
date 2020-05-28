FROM mcr.microsoft.com/dotnet/nightly/sdk:5.0-alpine AS build
WORKDIR /app
COPY WorkPlanner/*.csproj ./
RUN dotnet restore

COPY . ./
WORKDIR /app

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/nightly/aspnet:5.0-alpine AS runtime
WORKDIR /app
COPY --from=build /app/out ./

ENV ASPNETCORE_URLS http://*:80

ENTRYPOINT ["dotnet", "WorkPlanner.dll"]